// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import YoutubeFillSvg from '@airclass/icons-svg/lib/asn/YoutubeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YoutubeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={YoutubeFillSvg}></AntdIcon>;
};

YoutubeFill.displayName = 'YoutubeFill';
YoutubeFill.inheritAttrs = false;
export default YoutubeFill;