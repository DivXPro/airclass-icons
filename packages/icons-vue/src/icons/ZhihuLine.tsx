// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ZhihuLineSvg from '@airclass/icons-svg/lib/asn/ZhihuLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZhihuLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZhihuLineSvg}></AntdIcon>;
};

ZhihuLine.displayName = 'ZhihuLine';
ZhihuLine.inheritAttrs = false;
export default ZhihuLine;