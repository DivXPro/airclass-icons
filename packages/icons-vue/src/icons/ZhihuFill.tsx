// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ZhihuFillSvg from '@airclass/icons-svg/lib/asn/ZhihuFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZhihuFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZhihuFillSvg}></AntdIcon>;
};

ZhihuFill.displayName = 'ZhihuFill';
ZhihuFill.inheritAttrs = false;
export default ZhihuFill;