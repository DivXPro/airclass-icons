// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TestTubeFillSvg from '@airclass/icons-svg/lib/asn/TestTubeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TestTubeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TestTubeFillSvg}></AntdIcon>;
};

TestTubeFill.displayName = 'TestTubeFill';
TestTubeFill.inheritAttrs = false;
export default TestTubeFill;