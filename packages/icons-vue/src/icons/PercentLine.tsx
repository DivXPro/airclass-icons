// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PercentLineSvg from '@airclass/icons-svg/lib/asn/PercentLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PercentLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentLineSvg}></AntdIcon>;
};

PercentLine.displayName = 'PercentLine';
PercentLine.inheritAttrs = false;
export default PercentLine;