import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import User from '../models/userModel';
import dotev from 'dotenv';
import { PassportStatic } from 'passport';

dotev.config();

interface JwtPayload {
  userId: number;
  exp: number;
  // Outras propriedades do payload, se houver...
}

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

export default function passportConfig(passport: PassportStatic) {
    passport.use(
        new JwtStrategy(options, async (jwt_payload: JwtPayload, done: VerifiedCallback) => {
            try {
                // Verifique o token do usuário e procure o usuário no banco de dados usando o ID do usuário
                const user = await User.findById(jwt_payload.userId);

                if (user) {
                    // Se o usuário foi encontrado, passe-o para a função done sem erros (null)
                    // O usuário autenticado estará disponível em req.user nas rotas protegidas
                    return done(null, user);
                } else {
                    // Se o usuário não foi encontrado, passe false para a função done para indicar falha na autenticação
                    return done(null, false);
                }
            } catch (error) {
                // Em caso de erro, passe-o para a função done com erro (error)
                return done(error, false);
            }
        }),
    );
}