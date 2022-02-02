import React, { FormEvent, useState } from 'react';
import styles from './Login.module.css';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import login from '@api/loginService';

export default function Login(): React.ReactElement {
    const { t } = useTranslation();

    const [details, setDetails] = useState<userDetails>({
        email: '',
        password: '',
    });
    type userDetails = {
        email: string;
        password: string;
    };

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        login(details);
    }

    return (
        <div className={styles['login']}>
            <form onSubmit={handleSubmit}>
                <div className={styles['label-input-wrapper']}>
                    <label>Email</label>
                    <input
                        className={styles['input']}
                        autoFocus
                        type="email"
                        value={details.email}
                        onChange={(e) =>
                            setDetails({ ...details, email: e.target.value })
                        }
                    />
                </div>
                <div className={styles['label-input-wrapper']}>
                    <label>{t('description.password')}</label>
                    <input
                        className={styles['input']}
                        type="password"
                        value={details.password}
                        onChange={(e) =>
                            setDetails({ ...details, password: e.target.value })
                        }
                    />
                </div>
                <button className={styles['submit']} type="submit">
                    Login
                </button>
                <NavLink to="/signup">SignUP</NavLink>
            </form>
        </div>
    );
}
