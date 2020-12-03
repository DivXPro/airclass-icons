// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckboxLineSvg from '@airclass/icons-svg/lib/asn/CheckboxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckboxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckboxLineSvg}></AntdIcon>;
};

CheckboxLine.displayName = 'CheckboxLine';
CheckboxLine.inheritAttrs = false;
export default CheckboxLine;