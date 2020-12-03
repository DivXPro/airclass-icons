// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TestTubeLineSvg from '@airclass/icons-svg/lib/asn/TestTubeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TestTubeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TestTubeLineSvg}></AntdIcon>;
};

TestTubeLine.displayName = 'TestTubeLine';
TestTubeLine.inheritAttrs = false;
export default TestTubeLine;