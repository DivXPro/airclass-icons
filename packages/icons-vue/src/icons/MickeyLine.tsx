// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MickeyLineSvg from '@airclass/icons-svg/lib/asn/MickeyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MickeyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MickeyLineSvg}></AntdIcon>;
};

MickeyLine.displayName = 'MickeyLine';
MickeyLine.inheritAttrs = false;
export default MickeyLine;