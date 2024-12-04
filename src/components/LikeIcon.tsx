import React from 'react';

import {scale} from 'react-native-size-matters';
import {SvgCss} from 'react-native-svg/css';

type Props = {
  color: string;
  strokeColor: string;
};

export const LIKE_ICON_SIZE = scale(20);

const LikeIcon: React.FC<Props> = ({color, strokeColor}): JSX.Element => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="19.49" height="18.695" viewBox="0 0 21 18.695"><defs><style>.a{fill:${color};stroke:${strokeColor};}</style></defs><path class="a" d="M-2187.124,1204.724c-2.448-2.145-5.534-2.118-7.52.081-.127.148-.228.27-.329.391-.1-.125-.209-.252-.342-.407-1.971-2.182-5.058-2.207-7.574,0-2.948,3.291-1.708,6.472-.626,7.709l7.75,8.427.793.9.676-.777,7.881-8.569C-2185.348,1211.263-2184.107,1208.082-2187.124,1204.724Z" transform="translate(2205.822 -1203.135)"/></svg>`;
  return <SvgCss xml={xml} width={LIKE_ICON_SIZE} height={LIKE_ICON_SIZE} />;
};

export default LikeIcon;
