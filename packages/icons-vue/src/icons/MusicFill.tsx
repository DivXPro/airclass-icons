// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MusicFillSvg from '@airclass/icons-svg/lib/asn/MusicFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MusicFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicFillSvg}></AntdIcon>;
};

MusicFill.displayName = 'MusicFill';
MusicFill.inheritAttrs = false;
export default MusicFill;