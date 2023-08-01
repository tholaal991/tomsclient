import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateFtdformInput = {
  forty_eight_hour_score: Scalars['Float']['input'];
  good_health_score: Scalars['Float']['input'];
  id: Scalars['Int']['input'];
  operator_id: Scalars['Int']['input'];
  shift_id: Scalars['Int']['input'];
  taking_medicine_score: Scalars['Float']['input'];
  twenty_four_hour_score: Scalars['Float']['input'];
};

export type CreateInchargeInput = {
  rcn: Scalars['Int']['input'];
};

export type CreateShiftInput = {
  id: Scalars['Int']['input'];
};

export type CreateUserInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  rcn: Scalars['Int']['input'];
};

export type Ftdapproval = {
  __typename?: 'Ftdapproval';
  id: Scalars['Int']['output'];
};

export type Ftdform = {
  __typename?: 'Ftdform';
  approval?: Maybe<Ftdapproval>;
  approval_status?: Maybe<Scalars['Int']['output']>;
  approveId?: Maybe<Scalars['Int']['output']>;
  forty_eight_hour_score?: Maybe<Scalars['Int']['output']>;
  good_health_score?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inchargeId?: Maybe<Scalars['Int']['output']>;
  operator: User;
  operatorId?: Maybe<Scalars['Int']['output']>;
  shiftId?: Maybe<Scalars['Int']['output']>;
  taking_medicine_score?: Maybe<Scalars['Int']['output']>;
  twenty_four_hour_score?: Maybe<Scalars['Int']['output']>;
};

export type Incharge = {
  __typename?: 'Incharge';
  /** Example field (placeholder) */
  rcn: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFtdform: Ftdform;
  createIncharge: Incharge;
  createShift?: Maybe<Shift>;
  createUser: User;
  findAll: Ftdapproval;
  removeFtdapproval: Ftdapproval;
  removeFtdform: Ftdform;
  removeIncharge: Incharge;
  removeShift: Shift;
  removeUser: User;
  updateApprovalStatus: Ftdform;
  updateFtdapproval: Ftdapproval;
  updateFtdform: Ftdform;
  updateIncharge: Incharge;
  updateShift: Shift;
};


export type MutationCreateFtdformArgs = {
  createFtdformInput: CreateFtdformInput;
};


export type MutationCreateInchargeArgs = {
  createInchargeInput: CreateInchargeInput;
};


export type MutationCreateShiftArgs = {
  createShiftInput: CreateShiftInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveFtdapprovalArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveFtdformArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveInchargeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveShiftArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateApprovalStatusArgs = {
  approvalStatus: Scalars['Int']['input'];
  formId: Scalars['Int']['input'];
};


export type MutationUpdateFtdapprovalArgs = {
  updateFtdapprovalInput: UpdateFtdapprovalInput;
};


export type MutationUpdateFtdformArgs = {
  updateFtdformInput: UpdateFtdformInput;
};


export type MutationUpdateInchargeArgs = {
  updateInchargeInput: UpdateInchargeInput;
};


export type MutationUpdateShiftArgs = {
  updateShiftInput: UpdateShiftInput;
};

export type Query = {
  __typename?: 'Query';
  form: Ftdform;
  formsByInchargeId: Array<Ftdform>;
  formsByUserId: Array<Ftdform>;
  ftdapproval: Ftdapproval;
  ftdform: Array<Ftdform>;
  getAllUsers: Array<User>;
  getFormById: Ftdform;
  incharge: Incharge;
  shift: Shift;
  user: User;
};


export type QueryFormArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFormsByInchargeIdArgs = {
  inchargeId: Scalars['Int']['input'];
};


export type QueryFormsByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryFtdapprovalArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetFormByIdArgs = {
  formId: Scalars['Int']['input'];
};


export type QueryInchargeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryShiftArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type Shift = {
  __typename?: 'Shift';
  id: Scalars['Int']['output'];
  shift_description?: Maybe<Scalars['String']['output']>;
  shift_end?: Maybe<Scalars['DateTime']['output']>;
  shift_name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  start_time?: Maybe<Scalars['DateTime']['output']>;
  users: User;
};

export type UpdateFtdapprovalInput = {
  approverId?: InputMaybe<Scalars['Int']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  inchargeId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFtdformInput = {
  approval_status?: InputMaybe<Scalars['Int']['input']>;
  approveId?: InputMaybe<Scalars['Int']['input']>;
  forty_eight_hour_score?: InputMaybe<Scalars['Int']['input']>;
  good_health_score?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  inchargeId?: InputMaybe<Scalars['Int']['input']>;
  operatorId?: InputMaybe<Scalars['Int']['input']>;
  operator_id?: InputMaybe<Scalars['Int']['input']>;
  shiftId?: InputMaybe<Scalars['Int']['input']>;
  shift_id?: InputMaybe<Scalars['Int']['input']>;
  taking_medicine_score?: InputMaybe<Scalars['Int']['input']>;
  twenty_four_hour_score?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateInchargeInput = {
  id: Scalars['Int']['input'];
  rcn?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateShiftInput = {
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  name?: Maybe<Scalars['String']['output']>;
  rcn: Scalars['Int']['output'];
};

export type FormsByUserIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type FormsByUserIdQuery = { __typename?: 'Query', formsByUserId: Array<{ __typename?: 'Ftdform', id?: number | null, approveId?: number | null, approval_status?: number | null, shiftId?: number | null, inchargeId?: number | null }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', name?: string | null, rcn: number }> };

export type FormsByInchargeIdQueryVariables = Exact<{
  inchargeId: Scalars['Int']['input'];
}>;


export type FormsByInchargeIdQuery = { __typename?: 'Query', formsByInchargeId: Array<{ __typename?: 'Ftdform', id?: number | null, operatorId?: number | null, shiftId?: number | null, approval_status?: number | null }> };

export type UpdateApprovalStatusMutationVariables = Exact<{
  formId: Scalars['Int']['input'];
  approvalStatus: Scalars['Int']['input'];
}>;


export type UpdateApprovalStatusMutation = { __typename?: 'Mutation', updateApprovalStatus: { __typename?: 'Ftdform', id?: number | null, approval_status?: number | null } };

export type GetFtdformWithOperatorQueryVariables = Exact<{
  formId: Scalars['Int']['input'];
}>;


export type GetFtdformWithOperatorQuery = { __typename?: 'Query', form: { __typename?: 'Ftdform', id?: number | null, operator: { __typename?: 'User', rcn: number, name?: string | null } } };

export type UpdateFtdformMutationVariables = Exact<{
  updateFtdformInput: UpdateFtdformInput;
}>;


export type UpdateFtdformMutation = { __typename?: 'Mutation', updateFtdform: { __typename?: 'Ftdform', id?: number | null, operatorId?: number | null, shiftId?: number | null, inchargeId?: number | null, approval_status?: number | null, good_health_score?: number | null, taking_medicine_score?: number | null, twenty_four_hour_score?: number | null, forty_eight_hour_score?: number | null, operator: { __typename?: 'User', rcn: number } } };


export const FormsByUserIdDocument = gql`
    query FormsByUserId($userId: Int!) {
  formsByUserId(userId: $userId) {
    id
    approveId
    approval_status
    shiftId
    inchargeId
  }
}
    `;

/**
 * __useFormsByUserIdQuery__
 *
 * To run a query within a React component, call `useFormsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormsByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFormsByUserIdQuery(baseOptions: Apollo.QueryHookOptions<FormsByUserIdQuery, FormsByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FormsByUserIdQuery, FormsByUserIdQueryVariables>(FormsByUserIdDocument, options);
      }
export function useFormsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormsByUserIdQuery, FormsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FormsByUserIdQuery, FormsByUserIdQueryVariables>(FormsByUserIdDocument, options);
        }
export type FormsByUserIdQueryHookResult = ReturnType<typeof useFormsByUserIdQuery>;
export type FormsByUserIdLazyQueryHookResult = ReturnType<typeof useFormsByUserIdLazyQuery>;
export type FormsByUserIdQueryResult = Apollo.QueryResult<FormsByUserIdQuery, FormsByUserIdQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    name
    rcn
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const FormsByInchargeIdDocument = gql`
    query FormsByInchargeId($inchargeId: Int!) {
  formsByInchargeId(inchargeId: $inchargeId) {
    id
    operatorId
    shiftId
    approval_status
  }
}
    `;

/**
 * __useFormsByInchargeIdQuery__
 *
 * To run a query within a React component, call `useFormsByInchargeIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormsByInchargeIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormsByInchargeIdQuery({
 *   variables: {
 *      inchargeId: // value for 'inchargeId'
 *   },
 * });
 */
export function useFormsByInchargeIdQuery(baseOptions: Apollo.QueryHookOptions<FormsByInchargeIdQuery, FormsByInchargeIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FormsByInchargeIdQuery, FormsByInchargeIdQueryVariables>(FormsByInchargeIdDocument, options);
      }
export function useFormsByInchargeIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormsByInchargeIdQuery, FormsByInchargeIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FormsByInchargeIdQuery, FormsByInchargeIdQueryVariables>(FormsByInchargeIdDocument, options);
        }
export type FormsByInchargeIdQueryHookResult = ReturnType<typeof useFormsByInchargeIdQuery>;
export type FormsByInchargeIdLazyQueryHookResult = ReturnType<typeof useFormsByInchargeIdLazyQuery>;
export type FormsByInchargeIdQueryResult = Apollo.QueryResult<FormsByInchargeIdQuery, FormsByInchargeIdQueryVariables>;
export const UpdateApprovalStatusDocument = gql`
    mutation UpdateApprovalStatus($formId: Int!, $approvalStatus: Int!) {
  updateApprovalStatus(formId: $formId, approvalStatus: $approvalStatus) {
    id
    approval_status
  }
}
    `;
export type UpdateApprovalStatusMutationFn = Apollo.MutationFunction<UpdateApprovalStatusMutation, UpdateApprovalStatusMutationVariables>;

/**
 * __useUpdateApprovalStatusMutation__
 *
 * To run a mutation, you first call `useUpdateApprovalStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateApprovalStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateApprovalStatusMutation, { data, loading, error }] = useUpdateApprovalStatusMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      approvalStatus: // value for 'approvalStatus'
 *   },
 * });
 */
export function useUpdateApprovalStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateApprovalStatusMutation, UpdateApprovalStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateApprovalStatusMutation, UpdateApprovalStatusMutationVariables>(UpdateApprovalStatusDocument, options);
      }
export type UpdateApprovalStatusMutationHookResult = ReturnType<typeof useUpdateApprovalStatusMutation>;
export type UpdateApprovalStatusMutationResult = Apollo.MutationResult<UpdateApprovalStatusMutation>;
export type UpdateApprovalStatusMutationOptions = Apollo.BaseMutationOptions<UpdateApprovalStatusMutation, UpdateApprovalStatusMutationVariables>;
export const GetFtdformWithOperatorDocument = gql`
    query GetFtdformWithOperator($formId: Int!) {
  form(id: $formId) {
    id
    operator {
      rcn
      name
    }
  }
}
    `;

/**
 * __useGetFtdformWithOperatorQuery__
 *
 * To run a query within a React component, call `useGetFtdformWithOperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFtdformWithOperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFtdformWithOperatorQuery({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useGetFtdformWithOperatorQuery(baseOptions: Apollo.QueryHookOptions<GetFtdformWithOperatorQuery, GetFtdformWithOperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFtdformWithOperatorQuery, GetFtdformWithOperatorQueryVariables>(GetFtdformWithOperatorDocument, options);
      }
export function useGetFtdformWithOperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFtdformWithOperatorQuery, GetFtdformWithOperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFtdformWithOperatorQuery, GetFtdformWithOperatorQueryVariables>(GetFtdformWithOperatorDocument, options);
        }
export type GetFtdformWithOperatorQueryHookResult = ReturnType<typeof useGetFtdformWithOperatorQuery>;
export type GetFtdformWithOperatorLazyQueryHookResult = ReturnType<typeof useGetFtdformWithOperatorLazyQuery>;
export type GetFtdformWithOperatorQueryResult = Apollo.QueryResult<GetFtdformWithOperatorQuery, GetFtdformWithOperatorQueryVariables>;
export const UpdateFtdformDocument = gql`
    mutation UpdateFtdform($updateFtdformInput: UpdateFtdformInput!) {
  updateFtdform(updateFtdformInput: $updateFtdformInput) {
    id
    operatorId
    shiftId
    inchargeId
    approval_status
    good_health_score
    taking_medicine_score
    twenty_four_hour_score
    forty_eight_hour_score
    operator {
      rcn
    }
  }
}
    `;
export type UpdateFtdformMutationFn = Apollo.MutationFunction<UpdateFtdformMutation, UpdateFtdformMutationVariables>;

/**
 * __useUpdateFtdformMutation__
 *
 * To run a mutation, you first call `useUpdateFtdformMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFtdformMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFtdformMutation, { data, loading, error }] = useUpdateFtdformMutation({
 *   variables: {
 *      updateFtdformInput: // value for 'updateFtdformInput'
 *   },
 * });
 */
export function useUpdateFtdformMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFtdformMutation, UpdateFtdformMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFtdformMutation, UpdateFtdformMutationVariables>(UpdateFtdformDocument, options);
      }
export type UpdateFtdformMutationHookResult = ReturnType<typeof useUpdateFtdformMutation>;
export type UpdateFtdformMutationResult = Apollo.MutationResult<UpdateFtdformMutation>;
export type UpdateFtdformMutationOptions = Apollo.BaseMutationOptions<UpdateFtdformMutation, UpdateFtdformMutationVariables>;