import * as React from 'react';
import Container from './Container';
import render from './render';

export default function createPageConfig(Component: React.ComponentType<any>) {
  const config: any = {
    data: {
      action: {},
      root: {
        children: [],
      },
    },

    onInit(this: any) {
      this.container = new Container(this);
      this.element = render(React.createElement(Component), this.container);
    },

    didUnmount(this: any) {
      this.container.clearUpdate();
      render(null, this.container);
    },
  };

  return config;
}
