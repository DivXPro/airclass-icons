// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SkipBackLineSvg from '@airclass/icons-svg/lib/asn/SkipBackLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkipBackLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkipBackLineSvg}></AntdIcon>;
};

SkipBackLine.displayName = 'SkipBackLine';
SkipBackLine.inheritAttrs = false;
export default SkipBackLine;