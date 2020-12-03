// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckboxIndeterminateLineSvg from '@airclass/icons-svg/lib/asn/CheckboxIndeterminateLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckboxIndeterminateLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckboxIndeterminateLineSvg}></AntdIcon>;
};

CheckboxIndeterminateLine.displayName = 'CheckboxIndeterminateLine';
CheckboxIndeterminateLine.inheritAttrs = false;
export default CheckboxIndeterminateLine;