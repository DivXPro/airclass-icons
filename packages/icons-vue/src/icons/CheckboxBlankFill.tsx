// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckboxBlankFillSvg from '@airclass/icons-svg/lib/asn/CheckboxBlankFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckboxBlankFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckboxBlankFillSvg}></AntdIcon>;
};

CheckboxBlankFill.displayName = 'CheckboxBlankFill';
CheckboxBlankFill.inheritAttrs = false;
export default CheckboxBlankFill;