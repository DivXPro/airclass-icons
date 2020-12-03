// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import YoutubeLineSvg from '@airclass/icons-svg/lib/asn/YoutubeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YoutubeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={YoutubeLineSvg}></AntdIcon>;
};

YoutubeLine.displayName = 'YoutubeLine';
YoutubeLine.inheritAttrs = false;
export default YoutubeLine;