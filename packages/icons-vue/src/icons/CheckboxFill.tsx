// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckboxFillSvg from '@airclass/icons-svg/lib/asn/CheckboxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckboxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckboxFillSvg}></AntdIcon>;
};

CheckboxFill.displayName = 'CheckboxFill';
CheckboxFill.inheritAttrs = false;
export default CheckboxFill;