// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OperaLineSvg from '@airclass/icons-svg/lib/asn/OperaLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OperaLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OperaLineSvg}></AntdIcon>;
};

OperaLine.displayName = 'OperaLine';
OperaLine.inheritAttrs = false;
export default OperaLine;