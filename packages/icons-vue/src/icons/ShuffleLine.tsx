// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShuffleLineSvg from '@airclass/icons-svg/lib/asn/ShuffleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShuffleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShuffleLineSvg}></AntdIcon>;
};

ShuffleLine.displayName = 'ShuffleLine';
ShuffleLine.inheritAttrs = false;
export default ShuffleLine;