// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TwitterLineSvg from '@airclass/icons-svg/lib/asn/TwitterLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TwitterLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TwitterLineSvg}></AntdIcon>;
};

TwitterLine.displayName = 'TwitterLine';
TwitterLine.inheritAttrs = false;
export default TwitterLine;