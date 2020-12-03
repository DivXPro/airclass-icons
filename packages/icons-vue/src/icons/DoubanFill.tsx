// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DoubanFillSvg from '@airclass/icons-svg/lib/asn/DoubanFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoubanFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoubanFillSvg}></AntdIcon>;
};

DoubanFill.displayName = 'DoubanFill';
DoubanFill.inheritAttrs = false;
export default DoubanFill;