// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MagicLineSvg from '@airclass/icons-svg/lib/asn/MagicLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MagicLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicLineSvg}></AntdIcon>;
};

MagicLine.displayName = 'MagicLine';
MagicLine.inheritAttrs = false;
export default MagicLine;