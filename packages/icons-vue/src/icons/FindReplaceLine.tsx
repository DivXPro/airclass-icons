// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FindReplaceLineSvg from '@airclass/icons-svg/lib/asn/FindReplaceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FindReplaceLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FindReplaceLineSvg}></AntdIcon>;
};

FindReplaceLine.displayName = 'FindReplaceLine';
FindReplaceLine.inheritAttrs = false;
export default FindReplaceLine;