import { Global, css } from '@emotion/react';
import 'modern-normalize';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
        }

        html,
        body {
          width: 100%;
          height: 100%;
          font-family: 'Noto Sans KR', sans-serif;
          font-weight: 400;
          font-size: 16px;
        }
      `}
    />
  );
}

export default GlobalStyles;
