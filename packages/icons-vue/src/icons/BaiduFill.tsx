// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BaiduFillSvg from '@airclass/icons-svg/lib/asn/BaiduFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BaiduFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BaiduFillSvg}></AntdIcon>;
};

BaiduFill.displayName = 'BaiduFill';
BaiduFill.inheritAttrs = false;
export default BaiduFill;