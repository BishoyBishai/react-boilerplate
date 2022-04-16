import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { loginSchema } from '../../validations';
import { ILogin } from '../../interfaces/i-home';

export default function HomePage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ILogin>({
        resolver: joiResolver(loginSchema),
        mode: 'onBlur'
    });

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
    });

    return (
        <div>
            login
            <form onSubmit={onSubmit}>
                <input {...register('email')} name="email" type="email" placeholder="email"></input>
                {errors.email && <span>{errors.email.message}</span>}
                <br />
                <input {...register('password')} name="password" type="password" placeholder="password"></input>
                {errors.password && <span>{errors.password.message}</span>}
                <br />
                <button type="submit">login</button>
            </form>
        </div>
    );
}
