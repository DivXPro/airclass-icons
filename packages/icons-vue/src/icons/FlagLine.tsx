// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlagLineSvg from '@airclass/icons-svg/lib/asn/FlagLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagLineSvg}></AntdIcon>;
};

FlagLine.displayName = 'FlagLine';
FlagLine.inheritAttrs = false;
export default FlagLine;