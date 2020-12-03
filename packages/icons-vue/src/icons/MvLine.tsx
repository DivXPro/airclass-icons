// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MvLineSvg from '@airclass/icons-svg/lib/asn/MvLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MvLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MvLineSvg}></AntdIcon>;
};

MvLine.displayName = 'MvLine';
MvLine.inheritAttrs = false;
export default MvLine;