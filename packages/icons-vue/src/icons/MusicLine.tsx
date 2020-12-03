// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MusicLineSvg from '@airclass/icons-svg/lib/asn/MusicLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MusicLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicLineSvg}></AntdIcon>;
};

MusicLine.displayName = 'MusicLine';
MusicLine.inheritAttrs = false;
export default MusicLine;