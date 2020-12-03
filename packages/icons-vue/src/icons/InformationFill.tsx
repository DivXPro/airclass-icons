// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InformationFillSvg from '@airclass/icons-svg/lib/asn/InformationFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InformationFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InformationFillSvg}></AntdIcon>;
};

InformationFill.displayName = 'InformationFill';
InformationFill.inheritAttrs = false;
export default InformationFill;