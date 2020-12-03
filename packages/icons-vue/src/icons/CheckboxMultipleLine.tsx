// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckboxMultipleLineSvg from '@airclass/icons-svg/lib/asn/CheckboxMultipleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckboxMultipleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckboxMultipleLineSvg}></AntdIcon>;
};

CheckboxMultipleLine.displayName = 'CheckboxMultipleLine';
CheckboxMultipleLine.inheritAttrs = false;
export default CheckboxMultipleLine;