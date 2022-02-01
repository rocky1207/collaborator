import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTutorial } from '@reduxStore/actions/tutorial';
import { removeTutorial } from '@reduxStore/actions/tutorial';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxStore/reducers';
import styles from './Tutorials.module.css';

export interface ITut {
    id: number;
    name: string;
}

const Tutorials = () => {
    const state = useSelector((state: RootState) => {
        return state.tutorial;
    });
    localStorage.setItem('state', JSON.stringify(state));

    const [value, setValue] = useState<string>('');

    const tutorialName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setValue(value);
    };

    const dispatch = useDispatch();
    const id: number = Date.now();

    const dispatchOnClickAddTutorial = (): void => {
        localStorage.setItem('state', JSON.stringify(state));
        dispatch(addTutorial(value, id));
        setValue('');
    };

    const dispatchOnClickRemoveTutorial = (name: string): void => {
        dispatch(removeTutorial(name));
    };

    return (
        <section className={styles.tutorialsSection}>
            <article className={styles.tutorialsArticle}>
                <div className={styles.addTutorialArea}>
                    <input
                        onChange={tutorialName}
                        type="text"
                        placeholder="Tutorial..."
                        value={value}
                        className={styles.addTutorialInput}
                    />
                    <button
                        onClick={dispatchOnClickAddTutorial}
                        className={styles.addTutorialButton}
                    >
                        ADD
                    </button>
                </div>
                {state?.map((tutorial: ITut) => {
                    return (
                        <div key={tutorial.id} className={styles.tutorialName}>
                            <p>{tutorial.name}</p>
                            <button
                                onClick={() =>
                                    dispatchOnClickRemoveTutorial(tutorial.name)
                                }
                                className={styles.removeTutorialButton}
                            >
                                REMOVE
                            </button>
                        </div>
                    );
                })}
            </article>
        </section>
    );
};

export default Tutorials;
