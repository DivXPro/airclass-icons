// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlipayFillSvg from '@airclass/icons-svg/lib/asn/AlipayFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlipayFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlipayFillSvg}></AntdIcon>;
};

AlipayFill.displayName = 'AlipayFill';
AlipayFill.inheritAttrs = false;
export default AlipayFill;