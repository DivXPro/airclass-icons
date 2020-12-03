// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SearchEyeFillSvg from '@airclass/icons-svg/lib/asn/SearchEyeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SearchEyeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchEyeFillSvg}></AntdIcon>;
};

SearchEyeFill.displayName = 'SearchEyeFill';
SearchEyeFill.inheritAttrs = false;
export default SearchEyeFill;