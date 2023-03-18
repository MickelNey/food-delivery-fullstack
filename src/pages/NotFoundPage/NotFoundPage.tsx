import React from 'react';
import {NavLink} from "react-router-dom";
import {routePaths} from "../routes";
import {Button} from "../../shared/ui";
import styles from './NotFound.module.scss'
import {Page} from "../Page";

export const NotFoundPage: React.FC = () => {



  return (
    <Page>
      <div className={styles.not}>404
        <NavLink to={routePaths.menu} >
          <Button>
            Back to menu
          </Button>
        </NavLink>
      </div>
    </Page>
  )
};
