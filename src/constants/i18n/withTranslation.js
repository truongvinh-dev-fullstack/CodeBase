// withTranslation.js
import React from 'react';
import i18n from './i18n';

export function withTranslation(WrappedComponent) {
  return function WithTranslation(props) {
    return <WrappedComponent {...props} t={i18n.t} />;
  };
}
