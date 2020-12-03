// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RefreshFillSvg from '@airclass/icons-svg/lib/asn/RefreshFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RefreshFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshFillSvg}></AntdIcon>;
};

RefreshFill.displayName = 'RefreshFill';
RefreshFill.inheritAttrs = false;
export default RefreshFill;