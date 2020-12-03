// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ZzzFillSvg from '@airclass/icons-svg/lib/asn/ZzzFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZzzFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZzzFillSvg}></AntdIcon>;
};

ZzzFill.displayName = 'ZzzFill';
ZzzFill.inheritAttrs = false;
export default ZzzFill;