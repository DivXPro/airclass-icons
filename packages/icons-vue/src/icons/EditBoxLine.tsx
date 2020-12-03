// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EditBoxLineSvg from '@airclass/icons-svg/lib/asn/EditBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditBoxLineSvg}></AntdIcon>;
};

EditBoxLine.displayName = 'EditBoxLine';
EditBoxLine.inheritAttrs = false;
export default EditBoxLine;