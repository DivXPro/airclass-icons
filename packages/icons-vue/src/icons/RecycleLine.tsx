// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RecycleLineSvg from '@airclass/icons-svg/lib/asn/RecycleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RecycleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecycleLineSvg}></AntdIcon>;
};

RecycleLine.displayName = 'RecycleLine';
RecycleLine.inheritAttrs = false;
export default RecycleLine;