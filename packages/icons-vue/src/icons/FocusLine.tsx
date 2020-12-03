// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FocusLineSvg from '@airclass/icons-svg/lib/asn/FocusLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FocusLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FocusLineSvg}></AntdIcon>;
};

FocusLine.displayName = 'FocusLine';
FocusLine.inheritAttrs = false;
export default FocusLine;