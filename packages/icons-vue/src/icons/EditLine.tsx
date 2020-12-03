// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EditLineSvg from '@airclass/icons-svg/lib/asn/EditLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditLineSvg}></AntdIcon>;
};

EditLine.displayName = 'EditLine';
EditLine.inheritAttrs = false;
export default EditLine;