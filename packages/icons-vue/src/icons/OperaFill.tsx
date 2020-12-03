// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OperaFillSvg from '@airclass/icons-svg/lib/asn/OperaFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OperaFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OperaFillSvg}></AntdIcon>;
};

OperaFill.displayName = 'OperaFill';
OperaFill.inheritAttrs = false;
export default OperaFill;