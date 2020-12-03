// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TBoxFillSvg from '@airclass/icons-svg/lib/asn/TBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TBoxFillSvg}></AntdIcon>;
};

TBoxFill.displayName = 'TBoxFill';
TBoxFill.inheritAttrs = false;
export default TBoxFill;