// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BellFillSvg from '@airclass/icons-svg/lib/asn/BellFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BellFillSvg}></AntdIcon>;
};

BellFill.displayName = 'BellFill';
BellFill.inheritAttrs = false;
export default BellFill;