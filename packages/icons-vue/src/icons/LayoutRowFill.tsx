// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutRowFillSvg from '@airclass/icons-svg/lib/asn/LayoutRowFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutRowFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutRowFillSvg}></AntdIcon>;
};

LayoutRowFill.displayName = 'LayoutRowFill';
LayoutRowFill.inheritAttrs = false;
export default LayoutRowFill;