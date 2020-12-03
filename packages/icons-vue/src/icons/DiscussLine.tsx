// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DiscussLineSvg from '@airclass/icons-svg/lib/asn/DiscussLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiscussLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscussLineSvg}></AntdIcon>;
};

DiscussLine.displayName = 'DiscussLine';
DiscussLine.inheritAttrs = false;
export default DiscussLine;