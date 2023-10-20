'use client';
import {ReactNode} from "react";
import Header from "@/app/components/Header/Header";
import {NameProvider} from "@/app/context/userContext";
import styles from './pagelayout.module.css';

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout({children}: PageLayoutProps) {
  return (
    <div className={styles.pageLayout}>
      <Header></Header>
      <div className={styles.centerContent}>
        <NameProvider>
          {children}
        </NameProvider>
      </div>
    </div>
  );
}

export default PageLayout;
