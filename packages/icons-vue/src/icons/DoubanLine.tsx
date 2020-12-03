// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DoubanLineSvg from '@airclass/icons-svg/lib/asn/DoubanLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoubanLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoubanLineSvg}></AntdIcon>;
};

DoubanLine.displayName = 'DoubanLine';
DoubanLine.inheritAttrs = false;
export default DoubanLine;