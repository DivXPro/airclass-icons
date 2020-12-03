// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckboxBlankLineSvg from '@airclass/icons-svg/lib/asn/CheckboxBlankLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckboxBlankLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckboxBlankLineSvg}></AntdIcon>;
};

CheckboxBlankLine.displayName = 'CheckboxBlankLine';
CheckboxBlankLine.inheritAttrs = false;
export default CheckboxBlankLine;